export default function Projects() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p>A cool DevOps project with Kubernetes & Docker.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p>CI/CD pipeline automation using GitLab.</p>
        </div>
      </div>
    </section>
  );
}
