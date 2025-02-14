// components/TopBar.tsx
interface AppFooterProps {
  className?: string;
}

const AppFooter: React.FC<AppFooterProps> = ({ className }) => {
  return (
    <div className={`w-full h-[45px] bg-gray-100 p-4 flex items-center justify-between ${className}`}>
      <div className="flex h-[29px] items-center justify-end w-full">
        <img src="/images/Flydubai-Logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default AppFooter;
