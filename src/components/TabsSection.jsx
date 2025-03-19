import Button from "./Button/Button"

function TabsSection({active, onChange}) {
  return (
    <section>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>Главная</Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
    </section>
  )
}

export default TabsSection