import { PlayCard } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { useThemeContext } from '@/hooks/useThemes';
import { THEMES_DATA } from '@/constants/themes';
import { useGlobalContext } from '@/context';






export const Landing = () => {





  const { theme } = useThemeContext();
  const currentTheme = THEMES_DATA.find(data => data.name === theme);
  return (
    <>

      <div className="max-w-full mt-0">
        <div className="flex flex-col md:flex-row w-full gap-x-16">
          {
            currentTheme ? (
              <img
                className="rounded-md w-full h-[650px] hidden md:block"
                src={`${currentTheme['board-image']}`}
                alt="chess-board"
              />
            ) : (
              <img
                className="rounded-md w-full md:h-3/4  hidden md:block"
                src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
                alt="chess-board"
              />
            )}
          <PlayCard />

        </div>
      </div>

      <Footer />
    </>
  );
};