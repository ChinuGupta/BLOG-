type LabelProps = {
  title: string;
};

export default function Label({ title }: LabelProps) {
  return <label>{title}</label>;
}
