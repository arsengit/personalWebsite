import * as React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

function DarkMode()
{
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <div tabIndex={1} className="dark-toggle">
                    <i tabIndex={1} className="icon-sun text-yellow-500 pr-2 text-xl" />
                    <input
                      tabIndex={1}
                        type="checkbox"
                        id="switch"
                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        checked={theme === 'dark'}
                    />
                    <label tabIndex={1} htmlFor="switch" />
                    <i tabIndex={1} className="icon-moon pl-2 text-lg" />
                </div>
            )}
        </ThemeToggler>
    )
}

export default DarkMode;