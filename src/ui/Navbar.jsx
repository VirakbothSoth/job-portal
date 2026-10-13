export default function Navbar() {
    return (
        <nav class="h-fit items-center flex justify-between p-4 border-b border-border bg-surface">
            <div>
                <img src="labelled_icon.png" className="h-8 w-auto" />
            </div>
            <div>
                <button class="font-hanken duration-300 transition-colors bg-primary hover:bg-primary/70 hover:cursor-pointer text-white rounded-sm px-4 py-2">
                    Sign Up
                </button>
            </div>
        </nav>
    )
}