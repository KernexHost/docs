import Link from "./Link";

export default function Header() {
  return (
    <header className="px-24 w-full h-24 flex justify-between bg-stone-800 text-white">
      <div className="flex items-center gap-4">
        <img className="w-24 h-24" src="/logo.png" alt="Logo" />
        <p className="text-2xl font-semibold">Kernex Hosting - Documentation</p>
      </div>
      <div className="flex items-center gap-4">
        <Link url="/getting-started" name="Getting started" />
        <Link url="/guides" name="Guides" />
        <Link url="/examples" name="Examples" />
        <Link url="https://kernex.host" name="Back to Home" />
      </div>
    </header>
  );
}
