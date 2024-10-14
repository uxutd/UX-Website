import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <div className="w-[100vw] h-screen bg-blue">
        <p>
          This is the about page. It is a simple page that is statically
          generated at build time.
        </p>
      </div>
    </div>
  );
}
