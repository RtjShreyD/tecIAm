
type TechIconProps = {
  name: string;
  logo?: string;
};

export default function TechIcon({ name, logo }: TechIconProps) {
  const initials = name
    .replace(/[^a-zA-Z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <span className={`tech-icon ${logo ? "has-logo" : "no-logo"}`}>
      <span className="tech-icon-fallback" aria-hidden="true">
        {initials}
      </span>

      {logo && (
        <img
          className="tech-icon-image"
          src={`https://cdn.simpleicons.org/${logo}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      )}
    </span>
  );
}
