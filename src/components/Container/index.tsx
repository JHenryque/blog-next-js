type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({
  children: Children,
}: Readonly<ContainerProps>) {
  return (
    <div className="text-slate-900 bg-slate-400 min-h-screen">
      <div className="max-w-screen-lg mx-auto px-8">{Children}</div>
    </div>
  );
}
