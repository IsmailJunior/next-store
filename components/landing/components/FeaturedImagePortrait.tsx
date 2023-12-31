import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { type IItemObject } from "@/types/item";

interface IFeaturedImageProps {
  data: IItemObject;
}

function FeaturedImagePortrait(props: IFeaturedImageProps) {
  const { data } = props;
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(false);
  const mediaQuery = useMediaQuery({ query: `(max-width: 760px)` });
  useEffect(() => {
    if (mediaQuery !== isMinWidthMedium) {
      setIsMinWidthMedium(mediaQuery);
    }
  }, [mediaQuery, isMinWidthMedium]);

  return (
		<figure
			className="absolute z-0 top-0 left-0 h-116 w-full bg-cover bg-no-repeat bg-center md:h-120"
			style={{
				backgroundImage: `url(${
					isMinWidthMedium
						? data.banner?.portrait?.mobile &&
						  data.banner.portrait.mobile
						: data.banner?.portrait?.desktop &&
						  data.banner.portrait.desktop
				})`,
			}}
		></figure>
  );
}

export default FeaturedImagePortrait;
