import Image from 'next/image';

/**
 * A role illustration from the DimeSchool sign-in screens (public/illustrations,
 * copied from dimeschool_v2), so each role looks the same here as at its login.
 * Every SVG carries its own background color, so it sits on any tile as a
 * framed window. Decorative: the caption beside it names the role.
 */
export default function Illustration({ src, className = '' }: { src: string; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <Image
        src={src}
        alt=""
        width={1024}
        height={1024}
        className="aspect-square h-auto w-full transition-transform duration-300 group-hover:scale-[1.04]"
      />
    </span>
  );
}
