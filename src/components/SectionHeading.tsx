type SectionHeadingProps = {
  kicker: string;
  title: string;
  text?: string;
};

export default function SectionHeading({
  kicker,
  title,
  text,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
