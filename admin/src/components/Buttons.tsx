import React, { FC } from 'react';
import {
  HiBell,
  HiOutlineBell,
  HiOutlineBolt,
  HiOutlineGlobeAlt,
  HiOutlineHome,
} from 'react-icons/hi2';
import DsButton from '../designSystem/components/buttons/DsButton';

const Buttons: FC = () => {
  return (
    <section id="ds-buttons" className="ds-section">
      <h2 className="ds-section-title">Buttons</h2>

      <div className="ds-section-content">
        <div className="ds-section-vaients">
          <h4 className="varients-title">Default button</h4>
          <div className="flex items-start gap-x-2">
            <DsButton type="default" text="Default" />
            <DsButton type="alternative" text="Alternative" />
            <DsButton type="dark" text="Dark" />
            <DsButton type="light" text="Light" />
            <DsButton type="green" text="Green" />
            <DsButton type="red" text="Red" />
            <DsButton type="yellow" text="Yellow" />
            <DsButton type="orange" text="Orange" />
            <DsButton type="purple" text="Purple" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Light Button</h4>
          <div className="flex items-start gap-x-2">
            <DsButton type="default-light" text="Default" />
            <DsButton type="dark-light" text="Dark" />
            <DsButton type="green-light" text="Green" />
            <DsButton type="red-light" text="Red" />
            <DsButton type="yellow-light" text="Yellow" />
            <DsButton type="orange-light" text="Orange" />
            <DsButton type="purple-light" text="Purple" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Outline buttons</h4>
          <div className="flex items-start gap-x-2">
            <DsButton type="outline-default" text="Default" />
            <DsButton type="outline-dark" text="Dark" />
            <DsButton type="outline-green" text="Green" />
            <DsButton type="outline-red" text="Red" />
            <DsButton type="outline-yellow" text="Yellow" />
            <DsButton type="outline-orange" text="Orange" />
            <DsButton type="outline-purple" text="Purple" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Button pills</h4>
          <div className="flex items-start gap-x-2">
            <DsButton type="default" text="Default" pill />
            <DsButton type="alternative" text="Alternative" pill />
            <DsButton type="dark" text="Dark" pill />
            <DsButton type="light" text="Light" pill />
            <DsButton type="green" text="Green" pill />
            <DsButton type="red" text="Red" pill />
            <DsButton type="yellow" text="Yellow" pill />
            <DsButton type="orange" text="Orange" pill />
            <DsButton type="purple" text="Purple" pill />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Sizes</h4>
          <div className="flex items-end gap-x-2">
            <DsButton type="default" text="XLarge" size="xl" />
            <DsButton type="default" text="Large" size="lg" />
            <DsButton type="default" text="Medium" size="base" />
            <DsButton type="default" text="Small" size="sm" />
            <DsButton type="default" text="Extra Small" size="xs" />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">With Icon</h4>
          <div className="flex items-start gap-x-2">
            <DsButton
              type="default"
              text="Left Icon"
              icon={<HiOutlineHome />}
            />
            <DsButton
              type="dark"
              text="Right Icon"
              icon={<HiOutlineBell />}
              rightIcon
            />
            <DsButton
              type="outline-default"
              text="Outline Left Icon"
              icon={<HiOutlineGlobeAlt />}
            />
            <DsButton
              type="outline-dark"
              text="Outline Right Icon"
              icon={<HiOutlineBolt />}
              rightIcon
            />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Just Icon</h4>
          <div className="flex items-end gap-x-2">
            <DsButton
              type="default"
              size="xl"
              icon={<HiOutlineHome />}
              justIcon
            />
            <DsButton
              type="outline-dark"
              size="xl"
              icon={<HiOutlineBell />}
              justIcon
            />
            <DsButton
              type="default"
              size="lg"
              icon={<HiOutlineHome />}
              justIcon
            />
            <DsButton
              type="outline-dark"
              size="lg"
              icon={<HiOutlineBell />}
              justIcon
            />
            <DsButton
              type="default"
              size="base"
              icon={<HiOutlineHome />}
              justIcon
            />
            <DsButton
              type="outline-dark"
              size="base"
              icon={<HiOutlineBell />}
              justIcon
            />
            <DsButton
              type="default"
              size="base"
              icon={<HiOutlineHome />}
              justIcon
              pill
            />
            <DsButton
              type="outline-dark"
              size="base"
              icon={<HiOutlineBell />}
              justIcon
              pill
            />
            <DsButton
              type="default"
              size="sm"
              icon={<HiOutlineHome />}
              justIcon
            />
            <DsButton
              type="outline-dark"
              size="sm"
              icon={<HiOutlineBell />}
              justIcon
            />
            <DsButton
              type="default"
              size="xs"
              icon={<HiOutlineHome />}
              justIcon
            />
            <DsButton
              type="outline-dark"
              size="xs"
              icon={<HiOutlineBell />}
              justIcon
            />
          </div>
        </div>

        {/* <div className="ds-section-vaients">
          <h4 className="varients-title">Light Colors</h4>
          <div className="flex items-start gap-x-2">
            <DsButton type="blue-light" text='Blue - Light' />
            <DsButton type="green-light" text='Green - Light' />
            <DsButton type="red-light" text='Red - Light' />
          </div>
        </div> */}

        <div className="ds-section-vaients">
          <h4 className="varients-title">Loading</h4>
          <div className="flex items-end gap-x-2">
            <DsButton type="default" text="Default" loading />
            <DsButton type="dark" text="Dark" loading />
            <DsButton type="outline-default" text="Outline Default" loading />
            <DsButton type="outline-dark" text="Outline Dark" loading />
            <DsButton type="outline-dark" icon={<HiBell />} justIcon loading />
            <DsButton
              type="outline-dark"
              icon={<HiBell />}
              justIcon
              pill
              loading
            />
          </div>
        </div>

        <div className="ds-section-vaients">
          <h4 className="varients-title">Disabled</h4>
          <div className="flex items-end gap-x-2">
            <DsButton type="default" text="Default" disabled />
            <DsButton type="dark" text="Dark" disabled />
            <DsButton type="outline-default" text="Outline Default" disabled />
            <DsButton type="outline-dark" text="Outline Dark" disabled />
            <DsButton
              type="outline-default"
              icon={<HiBell />}
              justIcon
              disabled
            />
            <DsButton type="outline-dark" icon={<HiBell />} justIcon disabled />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Buttons;
