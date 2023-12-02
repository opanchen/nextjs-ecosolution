type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div
      // className="w-full mx-auto px-[20px] md:px-[30px] xl:px-[100px] sm:w-[480px] md:w-[768px] xl:w-[1280px]"
      className="w-full mx-auto px-[20px] md:px-[30px] xl:px-[20px] sm:w-[480px] md:w-[768px] xl:w-[1280px]"
    >
      {children}
    </div>
  );
};
