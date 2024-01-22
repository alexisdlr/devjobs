import { getJobs } from "@/actions/getJobs";
import { JobPosting } from "@/types";

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const parseid = parseInt(id);
  const jobs = await getJobs();
  const currentJob = jobs.find((job: JobPosting) => job.id === parseid);

  return (
    <div>
      <h1>Detalle de la página</h1>
      <p>Posición: {currentJob?.location}</p>
    </div>
  );
}
