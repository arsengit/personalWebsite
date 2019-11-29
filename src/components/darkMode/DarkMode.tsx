import * as React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

function DarkMode()
{
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <div className="dark-toggle">
                    <i className="icon-sun text-yellow-500 pr-2 text-xl" />
                    <input
                        type="checkbox"
                        id="switch"
                        onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                        checked={theme === 'dark'}
                    />
                    <label htmlFor="switch" />
                    <i className="icon-moon pl-2 text-lg" />
                </div>
            )}
        </ThemeToggler>
    )
}

export default DarkMode;