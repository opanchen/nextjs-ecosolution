type Props = {
  message: string;
};

export const FormErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <p className="absolute right-0 bottom-[-22px] xl:bottom-[-26px] leading-none text-[12px] text-right text-red tracking-[-0.48px]">
      {message}
    </p>
  );
};
