import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="text-4xl m-2">Dogs</h1>

      <Image
        src="/assets/img/dog-jumping.jpg"
        width={500}
        height={500}
        alt="random dog"
      />
    </div>
  );
}
