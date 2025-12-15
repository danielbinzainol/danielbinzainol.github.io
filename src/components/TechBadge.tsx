interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

const TechBadge = ({ name, icon }: TechBadgeProps) => {
  return (
    <div className="tech-badge flex items-center gap-2 hover:scale-105 cursor-default">
      {icon && <span className="text-primary">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default TechBadge;
