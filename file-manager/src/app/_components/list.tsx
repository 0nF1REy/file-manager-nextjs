import { groupFilesByType } from "@/app/utils";
import Image from "next/image";
import { UPLOAD_DIR } from "../constants";
import fs from "fs/promises";
import { deleteFile } from "../actions";

const List = async () => {
  let files: string[] = [];

  try {
    files = await fs.readdir(UPLOAD_DIR);
  } catch (error) {
    console.error(error);
    await fs.mkdir(UPLOAD_DIR);
  }

  const groupedFiles = groupFilesByType(files);

  const handleDelete = async (fileName: string) => {
    "use server";

    await deleteFile(fileName);
  };

  return (
    <>
      {Object.entries(groupedFiles).map(([type, typeFiles]) => (
        <section key={type} className="mb-10">
          <h2 className="text-2xl font-semibold mb-5 capitalize text-foreground">
            {type} Files
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typeFiles.map((file) => (
              <article
                key={file}
                className="bg-white bg-opacity-90 rounded-lg border border-accent p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium text-foreground truncate">
                      {file.substring(file.indexOf("-") + 1)}
                    </p>
                    <p className="text-sm text-accent">
                      {new Date(
                        parseInt(file.split("-")[0])
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <form action={handleDelete.bind(null, file)}>
                    <button
                      type="submit"
                      className="ml-3 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </form>
                </div>

                {type === "image" && (
                  <div className="relative aspect-video bg-background rounded-md overflow-hidden shadow-inner">
                    <Image
                      src={`/api/download/${file}`}
                      alt={file}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {type === "video" && (
                  <video
                    className="w-full rounded-md bg-background shadow-inner"
                    controls
                    src={`/api/download/${file}`}
                  />
                )}

                {type === "audio" && (
                  <audio
                    className="w-full mt-4"
                    controls
                    src={`/api/download/${file}`}
                    preload="none"
                  />
                )}

                {(type === "document" || type === "other") && (
                  <div className="mt-4">
                    <a
                      href={`/api/download/${file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-hover text-base font-semibold"
                    >
                      Download File
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {files.length === 0 && (
        <div className="text-center py-16 bg-background rounded-lg border border-accent shadow-sm">
          <p className="text-accent text-lg">No files uploaded yet</p>
        </div>
      )}
    </>
  );
};

export { List };
