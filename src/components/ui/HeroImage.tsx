export const HeroImage: React.FC = () => {
  return (
    <picture className="block w-full smOnly:h-[200px]">
      <source
        srcSet="
            /images/hero/mobile/hero.webp 1x, 
            /images/hero/mobile/hero@2x.webp 2x"
        media="(max-width: 767px)"
        type="image/webp"
      />
      <source
        srcSet="
            /images/hero/tablet/hero.webp 1x, 
            /images/hero/tablet/hero@2x.webp 2x"
        media="(max-width: 1279px)"
        type="image/webp"
      />
      <source
        srcSet="
            /images/hero/desktop/hero.webp 1x, 
            /images/hero/desktop/hero@2x.webp 2x"
        media="(min-width: 1280px)"
        type="image/webp"
      />

      <source
        srcSet="
            /images/hero/mobile/hero.jpg 1x, 
            /images/hero/mobile/hero@2x.jpg 2x"
        media="(max-width: 767px)"
      />
      <source
        srcSet="
            /images/hero/tablet/hero.jpg 1x, 
            /images/hero/tablet/hero@2x.jpg 2x"
        media="(max-width: 1279px)"
      />
      <source
        srcSet="
            /images/hero/desktop/hero.jpg 1x, 
            /images/hero/desktop/hero@2x.jpg 2x"
        media="(min-width: 1280px)"
      />

      <img
        className="object-cover object-center w-full h-full"
        src="/images/hero/mobile/hero.jpg"
        alt="Electric turbines of a wind farm"
      />
    </picture>
  );
};
