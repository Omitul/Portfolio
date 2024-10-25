import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col gap-y-3 mt-20" id="contact">
      <div className="gap-y-2">
        <h1 className="text-2xl md:text-5xl mb-2">Contact Me</h1>
        <p className="md:text-2xl text-gray-500">
          If you have any queries about me or want to hire me, feel free to
          knock me!
        </p>
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            alt="Email Icon"
            height={40}
            src="https://i.postimg.cc/t4pH9d9p/email-icon-clipart-best-22.png"
            width={40}
          />
          <Link
            className="text-lg font-semibold hover:bg-black"
            href="mailto:your-email@example.com"
          />
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            className="rounded-full"
            alt="Facebook Logo"
            height={40}
            src="https://i.postimg.cc/P5cTJ1Y6/image.png"
            width={40}
          />
          <Link
            className="text-lg font-semibold hover:underline"
            href="mailto:your-email@example.com"
          />
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            className="rounded-full"
            alt="Github Logo"
            height={43}
            src="https://i.postimg.cc/LX278sCC/image.png"
            width={43}
          />
          <Link
            className="text-lg font-semibold hover:underline"
            href="mailto:your-email@example.com"
          />
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            alt="Linkedin Logo"
            height={55}
            src="https://i.postimg.cc/Hspgg4YH/b2f828513f21444829a619ce563d4d4e.png"
            width={55}
          />
          <Link
            className="text-lg font-semibold hover:underline"
            href="mailto:your-email@example.com"
          />
        </div>

        <div className="flex items-center space-x-2 hover:opacity-80 cursor-pointer">
          <Image
            className="rounded-3xl"
            alt="Twitter Logo"
            height={44}
            src="https://i.postimg.cc/YSYKSZp9/pngtree-twitter-social-media-icon-png-image-6315986.png"
            width={44}
          />
          <Link
            className="text-lg font-semibold hover:underline"
            href="mailto:your-email@example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
