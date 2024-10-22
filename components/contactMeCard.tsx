import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="gap-y-2">
        <h1 className="text-5xl mb-2">Contact Me</h1>
        <p className="text-2xl text-gray-500">
          If you have any queries about me or want to hire me, feel free to
          knock me!
        </p>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="https://i.postimg.cc/t4pH9d9p/email-icon-clipart-best-22.png"
            alt="Email Icon"
            width={40}
            height={40}
          />
          <Link
            href="mailto:your-email@example.com"
            className="text-lg font-semibold hover:bg-black"
          ></Link>
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="https://i.postimg.cc/wjv053VD/2023-Facebook-icon.png"
            alt="Facebook Logo"
            width={40}
            height={40}
          />
          <Link
            href="mailto:your-email@example.com"
            className="text-lg font-semibold hover:underline"
          ></Link>
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="https://i.postimg.cc/qvVvyC05/25231.png"
            alt="Github Logo"
            width={40}
            height={40}
          />
          <Link
            href="mailto:your-email@example.com"
            className="text-lg font-semibold hover:underline"
          ></Link>
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="https://i.postimg.cc/Hspgg4YH/b2f828513f21444829a619ce563d4d4e.png"
            alt="Linkedin Logo"
            width={55}
            height={55}
          />
          <Link
            href="mailto:your-email@example.com"
            className="text-lg font-semibold hover:underline"
          ></Link>
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            src="https://i.postimg.cc/1zFT6fmJ/twitter-logo-icon-voronezh-russia-november-round-blue-color-164586139.webp"
            alt="Twitter Logo"
            width={46}
            height={46}
          />
          <Link
            href="mailto:your-email@example.com"
            className="text-lg font-semibold hover:underline"
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
