export default function Footer({ reports }) {
  return (
    <footer className="px-5 py-3 bg-emerald-500">
      <p className="text-sm">{reports.length} Locations World Wide</p>
    </footer>
  );
}
