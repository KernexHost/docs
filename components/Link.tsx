type LinkProps = {
  url: string;
  name: string;
};

export default function Link({ url, name }: LinkProps) {
  return (
    <a className="text-xl" href={url}>
      {name}
    </a>
  );
}
