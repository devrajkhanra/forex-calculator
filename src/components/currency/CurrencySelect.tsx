import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { CurrenciesResponse } from '../../types/fx';

interface CurrencySelectProps {
    currencies: CurrenciesResponse;
    value: string;
    onChange: (val: string) => void;
}

export function CurrencySelect({ currencies, value, onChange }: CurrencySelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the dropdown if the user clicks anywhere outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="custom-select-container" ref={dropdownRef}>
            <button
                type="button"
                className="custom-select-trigger"
                onClick={() => setIsOpen(!isOpen)}
            >
                {value}
                <ChevronDown className="dropdown-icon" size={16} />
            </button>

            {isOpen && (
                <div className="custom-select-menu">
                    {Object.keys(currencies).map((code) => (
                        <button
                            key={code}
                            type="button"
                            className={`custom-select-option ${value === code ? 'selected' : ''}`}
                            onClick={() => {
                                onChange(code);
                                setIsOpen(false);
                            }}
                        >
                            {code}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}