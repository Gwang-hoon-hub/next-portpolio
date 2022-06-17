import { useTheme } from 'next-themes'

export default function DarkModeToggleMode(){
    // theme : 현재 값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter

    const { theme, setTheme } = useTheme()

    return (
        <>
             <button className="inline-flex items-center
               border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
                focus:outline-none
              bg-gray-300
              hover:bg-gray-50 
              dark:bg-slate-500
              hover:text-orange-500
              dark:hover:text-yellow-100
              "
             type="button"
             onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path fillRule="evenodd" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>

                {/* 다크모드 */}
                <svg xmlns="http://www.w3.org/2000/svg" className="invisible dark:visible dark:h-5 dark:w-5 h-0 w-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path fillRule="evenodd" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>        
        </>
    );
}