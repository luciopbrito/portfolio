import React from "react";
import { S } from "./styles";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineMail,
	AiOutlinePhone,
} from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const SectionContact: React.FC = () => {
	const {t} = useTranslation();

	return (
		<S.Container id="contact">
			<S.Title>{t('pages.home.sections.contact.title')}</S.Title>
			<S.ContainerContact>
				<S.ContentTitle>{t('pages.home.sections.contact.container.title')}</S.ContentTitle>
				<S.ContainerContent>
					<div className="item">
						<div>
							<AiOutlinePhone className="icon" />
						</div>
						<div>
							<S.Subtitle>{t('pages.home.sections.contact.container.telephone.subtitle')}</S.Subtitle>
							<span>{t('pages.home.sections.contact.container.telephone.number')}</span>
						</div>
					</div>
					<div className="item">
						<div>
							<AiFillLinkedin className="icon" />
						</div>
						<div>
							<S.Subtitle>{t('pages.home.sections.contact.container.social_media.linkedIn.subtitle')}</S.Subtitle>
							<a className="link" href={t('pages.home.sections.contact.container.social_media.linkedIn.href')}>
								{t('pages.home.sections.contact.container.social_media.linkedIn.href')}
							</a>
						</div>
					</div>
					<div className="item">
						<div>
							<AiOutlineMail className="icon" />
						</div>
						<div>
							<S.Subtitle>{t('pages.home.sections.contact.container.email.subtitle')}</S.Subtitle>
							<span>{t('pages.home.sections.contact.container.email.href')}</span>
						</div>
					</div>
					<div className="item">
						<div>
							<AiFillGithub className="icon" />
						</div>
						<div>
							<S.Subtitle>{t('pages.home.sections.contact.container.social_media.github.subtitle')}</S.Subtitle>
							<a className="link" href={t('pages.home.sections.contact.container.social_media.linkedIn.href')}>
								{t('pages.home.sections.contact.container.social_media.github.href')}
							</a>
						</div>
					</div>
					<div className="item">
						<div>
							<BiMap className="icon" />
						</div>
						<div>
							<S.Subtitle>{t('pages.home.sections.contact.container.location.name')}</S.Subtitle>
							<span>{t('pages.home.sections.contact.container.location.address')}</span>
						</div>
					</div>
				</S.ContainerContent>
			</S.ContainerContact>
		</S.Container>
	);
};

export default SectionContact;
