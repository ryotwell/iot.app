import { useState } from 'react'
import { exportToExcel } from '@/lib/export'

import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const options = [
    {
        id: 'this-month',
        name: 'Bulan ini',
    },
    {
        id: 'this-year',
        name: 'Tahun ini',
    },
]

export function DateCatesComponent({ activeOption, setActiveOption }) {
    const handleSelect = value => {
        setActiveOption(value)
    }

    return (
        <>
            <Select value={activeOption} onValueChange={handleSelect}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="--- [ PILIH ] ---" />
                </SelectTrigger>
                <SelectContent>
                    {options.map(({ id, name }, key) => {
                        return (
                            <SelectItem key={key} value={id}>
                                {name}
                            </SelectItem>
                        )
                    })}
                </SelectContent>
            </Select>
        </>
    )
}

export default function SheetExport() {
    const [activeOption, setActiveOption] = useState(options[0].id)

    const handleExportButton = () => {
        exportToExcel({ activeOption, withLoading: true })
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Export</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Export Data</SheetTitle>
                    <SheetDescription>
                        Export data suhu, kelembapan dan gas.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <DateCatesComponent
                        {...{ activeOption, setActiveOption }}
                    />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="button" onClick={handleExportButton}>
                            Export
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
