import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { ImgHTMLAttributes } from "react";

const LazyImage = ({
  src,
  alt,
  className,
  isLoading,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { isLoading: boolean }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={loading ? "hidden" : className}
        onError={() => setLoading(true)}
        loading="lazy"
        {...rest}
      />
      <Skeleton
        className={loading ? "w-full aspect-square rounded-none" : "hidden"}
      />
    </>
  );
};

export default LazyImage;
