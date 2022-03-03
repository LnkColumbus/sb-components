import './mylabel.css';

export interface MyLabelProps {
    /**
     * Este es el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Este es el color de la equtiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Si va a estar capitalizada la etiqueta
     */
    allCaps?: boolean
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string
}

export const MyLabel = ( {
    allCaps   = false,
    color     = 'primary',
    fontColor = '',
    label     = 'No label',
    size      = 'normal',
}: MyLabelProps ) => {
  return (
    <span
        className={`label ${ size } text-${ color }`}
        style={{ color: fontColor }}
    >
        { (allCaps) ? label.toUpperCase() : label }
    </span>
  )
}
