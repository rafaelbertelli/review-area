type Props = {
  topic: string;
};

export default function SidebarDivider({ topic }: Props) {
  return (
    <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
      {topic}
    </span>
  );
}
