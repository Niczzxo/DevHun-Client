const Badge = ({ children, className = "" }) => {
  return (
    <>
      <span
        className={`badge-premium ${className}`}
      >
        {children}
      </span>
    </>
  );
};

export default Badge;
