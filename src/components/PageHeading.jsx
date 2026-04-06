function PageHeading({ title, subtitle }) {
  return (
    <div className="space-y-2 mt-12">
      <h1 className="page-heading-title font-heading text-hard-violet">{title}</h1>
      {subtitle ? (
        <p className="max-w-2xl text-lg text-medium-violet">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default PageHeading
