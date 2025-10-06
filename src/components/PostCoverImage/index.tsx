import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>;
  linkProps: React.ComponentProps<typeof Link>;
};

export default function PostCoverImage({
  imageProps,
  linkProps,
}: Readonly<PostCoverImageProps>) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full",
        "h-full",
        "overflow-hidden",
        "rounded-xl",
        linkProps.className
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full",
          "h-full",
          "object-cover",
          "object-center",
          "group-hover:scale-105",
          "transition",
          imageProps.className
        )}
        alt={imageProps.alt}
      />
    </Link>
  );
}
