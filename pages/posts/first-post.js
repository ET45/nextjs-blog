import Link from "next/link";

export default function firstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back Home</a>
        </Link>
      </h2>
    </div>
  );
}
