type Props = {
  children: string;
};

export const Header = (props: Props) => {
  const { children } = props;
  return (
    <h1 class="text-3xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">
      {children}
    </h1>
  );
};
