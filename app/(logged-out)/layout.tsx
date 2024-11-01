// თუ მომხამრებელი არის ავტორიზირებული, არ შეუშვა შიგნით არსებულ როუთებზე.

export default async function LoggedOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
