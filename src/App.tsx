import { MotionConfig } from 'motion/react';
import { Layout } from './components/Layout.tsx';
import { RouterProvider, useRouter } from './components/RouterContext.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { AmjadProfilePage } from './pages/AmjadProfilePage.tsx';
import { ArticleDetailPage } from './pages/ArticleDetailPage.tsx';
import { ArticlesListPage } from './pages/ArticlesListPage.tsx';
import { CasesPage } from './pages/CasesPage.tsx';
import { ClientsPage } from './pages/ClientsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { GalleryAlbumPage, GalleryPage } from './pages/GalleryPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { PracticeAreasPage } from './pages/PracticeAreasPage.tsx';
import { TeamPage } from './pages/TeamPage.tsx';

function RouteView() {
  const { route } = useRouter();

  switch (route.kind) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'team':
      return <TeamPage focusOffice="core" />;
    case 'lahore-team':
      return <TeamPage focusOffice="lahore" />;
    case 'amjad-profile':
      return <AmjadProfilePage />;
    case 'clients':
      return <ClientsPage />;
    case 'cases':
      return <CasesPage />;
    case 'practice-areas':
      return <PracticeAreasPage />;
    case 'articles':
      return <ArticlesListPage pageNumber={route.page} />;
    case 'category':
      return <ArticlesListPage categorySlug={route.categorySlug} pageNumber={route.page} />;
    case 'article':
      return <ArticleDetailPage article={route.article} />;
    case 'gallery':
      return <GalleryPage />;
    case 'gallery-album':
      return <GalleryAlbumPage album={route.album} />;
    case 'contact':
      return <ContactPage />;
    case 'not-found':
      return <NotFoundPage />;
  }
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <Layout>
          <RouteView />
        </Layout>
      </RouterProvider>
    </MotionConfig>
  );
}
