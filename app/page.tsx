import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WeTokenLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <img src="/mnt/data/wewe.png" alt="$we Token Logo" className="w-32 h-32 mx-auto mb-4 rounded-full" />
        <h1 className="text-4xl font-bold text-gray-800">Welcome to $we</h1>
        <p className="text-lg text-gray-600 mt-2">
          Born from unity and togetherness on Farcaster.
        </p>
      </motion.div>

      <Card className="w-full max-w-md shadow-2xl rounded-2xl">
        <CardContent className="p-6 space-y-4 text-center">
          <img src="/mnt/data/webanner.png" alt="$we Token Banner" className="w-full rounded-xl mb-4" />
          <p className="text-gray-700">
            "We are building the future of the internet, right here, right now."
          </p>
          <p className="text-sm text-gray-500">
            - Inspired by Jesse Pollak
          </p>
          <div className="space-y-2">
            <Button
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
              asChild
            >
              <a href="https://dexscreener.com/base/0xfc36f33535bdc70c1a9fac03297e0b0f2de64b49" target="_blank" rel="noopener noreferrer">
                View on Dexscreener
              </a>
            </Button>
            <Button
              className="w-full bg-green-600 text-white hover:bg-green-700"
              asChild
            >
              <a href="https://example.com/buy-we-token" target="_blank" rel="noopener noreferrer">
                Buy $we Token
              </a>
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Contract Address: 0x06B0AAD2AebDEf99946b6c986e8E00c4fD58f4a5
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
