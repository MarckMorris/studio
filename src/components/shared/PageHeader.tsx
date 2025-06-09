interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode; // For action buttons like "Create New"
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="mt-1 text-muted-foreground">{description}</p>
          )}
        </div>
        {children && <div className="mt-4 md:mt-0">{children}</div>}
      </div>
    </div>
  );
}
