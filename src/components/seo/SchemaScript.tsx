import { JsonLd } from "@/components/seo/JsonLd";

type Props = {
  data: object | object[];
};

export function SchemaScript({ data }: Props) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <JsonLd key={i} data={item} />
      ))}
    </>
  );
}
