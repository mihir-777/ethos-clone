export default function Header() {
    return (
        <div className="bg-black border-b border-gray-800">
            <div className="flex items-center justify-between px-6 py-2 text-xs text-gray-300">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span>📱</span>
                        <span>+91 87567 26887</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📱</span>
                        <span>+91 87567 26887</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-500">
                        <span>📱</span>
                        <span>+91 87567 26855</span>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        <span>🤍</span>
                        <span>WISHLIST</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        <span>🛒</span>
                        <span>CART</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        <span>👤</span>
                        <span>LOGIN</span>
                    </button>
                    <button className="hover:text-white transition-colors">SIGNUP</button>
                </div>
            </div>
        </div>
    );
}
