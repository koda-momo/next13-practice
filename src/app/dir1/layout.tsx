export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>dir1のレイアウトファイル</div>
      <div>{children}</div>
    </section>
  );
}
