import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={require("../public/images/logo.png")}
      alt="Empire de Miami Logo"
      width={40}
      height={40}
    />
  );
}
