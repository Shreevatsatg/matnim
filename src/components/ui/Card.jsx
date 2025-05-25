const Card = ({ 
  children, 
  className = '', 
  title,
  subtitle,
  footer,
  noPadding = false
}) => {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-gray-700">
          {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
          {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
