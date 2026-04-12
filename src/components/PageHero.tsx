type Props = {
  kicker: string;
  title: string;
  text: string;
};

export default function PageHero({ kicker, title, text }: Props) {
  return (
    <section className="page-hero glass">
      <span className="section-kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}
