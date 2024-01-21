export default function DetailPage({
  params,
}: {
  params: { position: string };
}) {
  const { position } = params;

  return (
    <div>
      <h1>Detalle de la página</h1>
      <p>Posición: {position}</p>
    </div>
  );
}
