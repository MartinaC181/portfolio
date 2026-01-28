export default function GlitchText({ text }: { text: string }) {
  return (
    <span 
      className="glitch font-bold uppercase tracking-widest text-primary" 
      data-text={text}
    >
      {text}
    </span>
  );
}