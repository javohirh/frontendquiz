import Flag from "react-world-flags";
export function Flags({ lang }) {
  if (lang == "en") {
    return (
      <div className="absolute top-[50%] left-1 w-6 h-6 rounded-full overflow-hidden translate-y-[-50%] border border-gray-300">
        <Flag code={"us"} className="object-cover w-full h-full" />
      </div>
    );
  }
  return (
    <div className="absolute top-[50%] left-1 w-6 h-6 rounded-full overflow-hidden translate-y-[-50%] border border-gray-300">
      <Flag code={lang} className="object-cover w-full h-full" />
    </div>
  );
}
