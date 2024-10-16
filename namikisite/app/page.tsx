import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Users, Lightbulb, Target } from "lucide-react"

export default function ProjectInfo() {
  return (
    <div className="min-h-screen bg-orange-50">
      <header className="bg-orange-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">あつまれ！なみきの・みんなで・きずくみらい！</h1>
          <p className="mt-2">Come together! Let's build the future of Namiki together!</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="background">背景</TabsTrigger>
            <TabsTrigger value="activities">活動内容</TabsTrigger>
            <TabsTrigger value="vision">ビジョン</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>プロジェクト概要</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  『あつまれ！なみき』ワーキンググループは、金沢区並木地域において、
                  地域住民や団体の意見を反映した活動拠点を整備し、
                  世代を超えたコミュニティづくりを目指しています。
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="background">
            <Card>
              <CardHeader>
                <CardTitle>プロジェクトの背景</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  金沢シーサイドタウンは、高齢化や人口減少に直面しており、
                  地域のつながりや支え合いの仕組みづくりが急務となっています。
                  このプロジェクトは、地域の課題解決と新たな価値創造を目指しています。
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle>主な活動内容</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>コミュニティカフェの運営</li>
                  <li>世代間交流イベントの開催</li>
                  <li>地域の困りごと相談窓口の設置</li>
                  <li>産学民連携によるプロジェクト推進</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle>目指す地域の将来像</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  誰もが気軽に集える居場所があり、世代を超えて支え合える
                  コミュニティを作ります。産学民連携により、新たな活動や
                  イベントが生まれ、地域の魅力が高まることを目指しています。
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2" />
                活動拠点
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>金沢区並木2丁目 ビアレヨコハマ（商店街）内</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                参加団体
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>地域住民、企業、大学、行政機関など</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">プロジェクトに参加する</h2>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqO1c8zGZ4LTvVRd_aQyAn0l1ZiOzbYGxsyY4SvAIgv1XNfA/viewform?usp=sf_link" className="text-white no-underline">
              詳細を問い合わせる
            </a>
          </Button>
        </div>
      </main>

      <footer className="bg-orange-100 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-orange-800">
          <p>&copy; 2024 『あつまれ！なみき』ワーキンググループ</p>
        </div>
      </footer>
    </div>
  )
}