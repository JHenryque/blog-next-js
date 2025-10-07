type PostSlugPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageParams) {
  const { slug } = await params;
  return (
    <section>
      <div>
        <h1>Rota dinãmica {slug}</h1>
      </div>
    </section>
  );
}
